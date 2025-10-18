

function evaluar() {
    window.location.href = 'evaluacion-auditoria-9001.html';
}

function uploadFile(button) {
    const li = button.parentElement;
    const fileInput = li.querySelector('input[type="file"]');
    const uploadedFilesDiv = document.getElementById('uploaded-files');
    const docUploadedDiv = li.querySelector('.uploaded-files-for-doc');

    if (fileInput.files.length === 0) {
        alert('Por favor, selecciona un archivo.');
        return;
    }

    const file = fileInput.files[0];
    const documentName = li.querySelector('a').textContent.trim();

    // Read file as data URL for storage and download
    const reader = new FileReader();
    reader.onload = function(e) {
        const fileDataURL = e.target.result;

        // Get existing uploaded files from localStorage
        let uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];

        // Add new file to the list
        const fileData = {
            documentName: documentName,
            fileName: file.name,
            fileSize: file.size,
            uploadTime: new Date().toISOString(),
            dataURL: fileDataURL
        };
        uploadedFiles.push(fileData);

        // Save to localStorage
        localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));

        // Update global display
        if (!uploadedFilesDiv.innerHTML.includes('<ul>')) {
            uploadedFilesDiv.innerHTML = '<p>Archivos subidos:</p><ul>';
        }

        const listItem = document.createElement('li');
        listItem.textContent = `${documentName} - ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
        uploadedFilesDiv.querySelector('ul').appendChild(listItem);

        if (!uploadedFilesDiv.innerHTML.includes('Archivos almacenados localmente en el navegador.')) {
            uploadedFilesDiv.innerHTML += '</ul><p>Archivos almacenados localmente en el navegador.</p>';
        }

        // Update document-specific display
        if (!docUploadedDiv.innerHTML.includes('<ul>')) {
            docUploadedDiv.innerHTML = '<p>Archivos subidos para este documento:</p><ul>';
        }

        const docListItem = document.createElement('li');
        docListItem.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} KB) - Subido el ${new Date().toLocaleString()}`;
        docUploadedDiv.querySelector('ul').appendChild(docListItem);

        if (!docUploadedDiv.innerHTML.includes('Archivos almacenados localmente.')) {
            docUploadedDiv.innerHTML += '</ul><p>Archivos almacenados localmente.</p>';
        }

        // Clear the input after upload
        fileInput.value = '';
    };

    reader.readAsDataURL(file);

    // Note: In a real application, you would send the file to a server for storage.
    // Since this is a static HTML page, files are not actually uploaded to a server.
    // They are only displayed as uploaded for demonstration purposes.
}
