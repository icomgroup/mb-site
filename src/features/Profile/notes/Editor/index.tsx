import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const MyEditor = ({
  onChange,
  initialData,
}: {
  onChange: (data: string) => void;
  initialData?: string;
}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        initialData: initialData ?? "",
        language: "fa",
        toolbar: {
          shouldNotGroupWhenFull: true,
          items: [
            "heading",
            "|",
            "blockQuote",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "|",
            "outdent",
            "indent",
            "|",
            // "imageUpload",
            "insertTable",
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "|",
            // "mediaEmbed",
            "undo",
            "redo",
            "selectAll",
            "link",
            // "accessibilityHelp",
            // "ckfinder",
            // "insertImage",
            // "imageInsert",
            // "uploadImage",
            // "imageUpload",
            // "imageTextAlternative",
            // "toggleImageCaption",
            // "imageStyle:inline",
            // "imageStyle:alignLeft",
            // "imageStyle:alignRight",
            // "imageStyle:alignCenter",
            // "imageStyle:alignBlockLeft",
            // "imageStyle:alignBlockRight",
            // "imageStyle:block",
            // "imageStyle:side",
            // "imageStyle:wrapText",
            // "imageStyle:breakText",
          ],
        },
      }}
      data=""
      onChange={(_event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
};
// How to get all possible bar items
//   Array.from(editor.ui.componentFactory.names())

export default MyEditor;
