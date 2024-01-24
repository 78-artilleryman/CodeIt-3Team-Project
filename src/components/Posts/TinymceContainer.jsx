import { Editor } from "@tinymce/tinymce-react";
import React from "react";

export default function TinyMceContainer () {
    return (
        <>
       
        <Editor
              id = 'tinyEditor'
              apiKey = 'x1q5ht9kvvjrulmek6rnk0bva0ekzznixbtgs3m7snz9sybq'
              init={{
            height: 700,
            menubar: false,
            plugins: [
        	'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'searchreplace',
            'fullscreen',
            'media',
            'table',
            'code',
            'help',
            'emoticons',
            'codesample',
            'quickbars',
        ],
        toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'lists table link charmap searchreplace | ' +
            'image media codesample emoticons fullscreen preview | ' +
            'removeformat | help ',
	}}
        />
     
        </>
    )
};