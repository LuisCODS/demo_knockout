function WebmailViewModel() {
    // Data
    var self = this;
    self.folders            = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId     = ko.observable();
    self.chosenFolderData   = ko.observable();
    // Show inbox by default
    self.goToFolder('Inbox');

    // Behaviours
    self.goToFolder = function(folder) {
        self.chosenFolderId(folder);
        $.get('/mail', { folder: folder }, self.chosenFolderData);
    };

}

ko.applyBindings(new WebmailViewModel());