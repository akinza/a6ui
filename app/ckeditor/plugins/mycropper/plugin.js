CKEDITOR.plugins.add('mycropper', {
    icons: 'crop',
    init: function (editor) {
        //Plugin logic goes here.
        // editor.addCommand('cropInsertImage', {
        //     exec: function (editor) {
        //         var img = document.createElement('img');
        //         img.src = "images/taj.jpg";
        //         editor.insertHtml("<img src='images/taj.jpg' width='200'>");
        //     }
        // });
        editor.addCommand( 'cropInsertImage', new CKEDITOR.dialogCommand( 'imgCropDialog' ) );
        // Creating toolbar button
        editor.ui.addButton('Crop', {
            label: 'Crop & Insert Image',
            command: 'cropInsertImage',
            toolbar: 'insert',
            icon:  CKEDITOR.plugins.getPath('mycropper') + "/icons/crop.png"
        });

        CKEDITOR.dialog.add( 'imgCropDialog', CKEDITOR.plugins.getPath('mycropper') + '/dialogs/imgCrop.js' );
    }
});