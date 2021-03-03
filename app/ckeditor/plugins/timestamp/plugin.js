CKEDITOR.plugins.add('timestamp', {
    icons: 'clock_red',
    init: function (editor) {
        //Plugin logic goes here.
        editor.addCommand('insertTimestamp', {
            exec: function (editor) {
                var now = new Date();
                editor.insertHtml('The current date and time is: <em>' + now.toString() + '</em>');
            }
        });

        // Creating toolbar button
        editor.ui.addButton('Timestamp', {
            label: 'Insert Timestamp',
            command: 'insertTimestamp',
            toolbar: 'insert',
            icon:  CKEDITOR.plugins.getPath('timestamp') + "/icons/clock_red.png"
        });
    }
});