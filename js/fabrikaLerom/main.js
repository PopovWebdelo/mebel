$(function(){

    $('a.getObjectModalButton').click(function () {
        var modalsBlock = $('.modalsBlock');
        var objectId = $(this).data('objectid');
        var modalForm = $('#objectModal'+objectId);

        if (modalForm.length == 0) {

            fetchObjectModalForm(objectId).done(
                function (data) {
                    modalsBlock.append(data['content']);
                    $('#objectModal'+objectId).modal('toggle');
                }
            );

        } else modalForm.modal('toggle');
    });

    function fetchObjectModalForm(_objectId){
        return $.ajax({
            url: '/catalog/ajaxGetCatalogListModalContentItemBlock/',
            type: 'POST',
            data: {
                'objectId' : _objectId
            },
            dataType: 'json'
        });
    }

});