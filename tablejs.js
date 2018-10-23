/*TableJS 1.1 - HTML table generator by pure Javascript code.*/
/*By André Menegassi (andremenegassi@hotmail.com) */

var tablejs = {

    generate: function (container, dataArrayObject, htmlRowTemplate, options)
    {

        container.innerHTML = "";

        var showHeaders = true;
        var tableClassName = "";
        var rowDataBound = null;
        var columnsTitle = [];
        var emptyText = "No rows";

        if (options != null) {

            if (options.columnsTitle != null) {
                columnsTitle = options.columnsTitle;
            }

            if (options.tableClassName != null && options.tableClassName != "")
            {
                tableClassName = options.tableClassName;
            }

            if (options.rowDataBound != null)
            {
                rowDataBound = options.rowDataBound;
            }

            if (options.emptyText != null) {
                emptyText = options.emptyText;
            }

        }

        var table = document.createElement("table");

        var htmlRowHeaders = "";

        if (columnsTitle.length > 0)
        {
            htmlRowHeaders += "<tr>"
            for (var j = 0; j < columnsTitle.length; j++) {

                htmlRowHeaders += "<th>" + columnsTitle[j] + "</th>";
            }
            htmlRowHeaders += "</tr>";


            var thead = document.createElement("thead");
            thead.innerHTML = htmlRowHeaders;
            table.appendChild(thead);
        }

        var tbody = document.createElement("tbody");
        var tbodyFrag = document.createDocumentFragment();

        for (var i = 0; i < dataArrayObject.length; i++) {

            var aux = htmlRowTemplate;

            for (var p in dataArrayObject[i]) {
                aux = aux.replace(new RegExp('{' + p + '}', 'g'), dataArrayObject[i][p]);
            }

            var tbodyFake = document.createElement("tbody");
            tbodyFake.innerHTML = aux;
            var newRow = tbodyFake.querySelector("tr");
            tbodyFrag.appendChild(newRow);

            if (rowDataBound != null)
                rowDataBound(newRow, dataArrayObject[i]);
        }

        if (dataArrayObject.length == 0) {
            container.innerHTML = emptyText;
        }
        else {

            tbody.appendChild(tbodyFrag);
            table.appendChild(tbody);
            container.appendChild(table);

            if (tableClassName != null) {
                table.className = tableClassName;
            }
        }

    },

}