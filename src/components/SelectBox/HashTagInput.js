import React, { useState } from "react";
import { ChromePicker } from "react-color"; // Color Picker import
import styles from "./HasgTagInput.module.css";

function HashtagInput({ hashtags, setHashtags }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("#f0f0f0"); // 기본 배경색
  const [showColorPicker, setShowColorPicker] = useState(false); // Color Picker 보이기/숨기기 상태

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = event => {
    if (event.key === " " && inputValue.trim() !== "" && hashtags.length < 2) {
      event.preventDefault(); // 스페이스바 기본 동작 방지
      setHashtags([...hashtags, { tag: inputValue.trim(), color: selectedColor }]);
      setInputValue(""); // 입력값 초기화
      setShowColorPicker(false); // Color Picker 숨기기
    }
  };

  const handleHashtagClick = index => {
    const updatedHashtags = [...hashtags];
    updatedHashtags.splice(index, 1); // 클릭된 해시태그 삭제
    setHashtags(updatedHashtags);
  };

  const handleColorChange = color => {
    setSelectedColor(color.hex);
  };

  const handleConfirmColor = () => {
    setHashtags([...hashtags, { tag: inputValue.trim(), color: selectedColor }]);
    setInputValue(""); // 입력값 초기화
    setShowColorPicker(false); // Color Picker 숨기기
  };

  return (
    <div className={styles.hashTag_wrapper}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="🔖 태그를 등록해주세요. (최대 2개)"
      />
      {inputValue.trim() !== "" && hashtags.length < 2 && (
        <div className={styles.colorPickerContainer}>
          <button onClick={() => setShowColorPicker(!showColorPicker)}>색상 선택</button>
          {showColorPicker && (
            <div>
              <ChromePicker color={selectedColor} onChange={handleColorChange} />
              <button onClick={handleConfirmColor}>확인</button>
            </div>
          )}
        </div>
      )}
      <div className={styles.hashtagContainer}>
        {hashtags.map((tagObj, index) => (
          <div
            key={index}
            className={styles.hashtagBox}
            style={{ backgroundColor: tagObj.color }}
            onClick={() => handleHashtagClick(index)}
          >
            #{tagObj.tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HashtagInput;
