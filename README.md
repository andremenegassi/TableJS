# TableJS (Pure JS) - Gerador de tabela dinâmica a partir de código Javascript.

Gerador de tabela HTML por código Javascript. 

<h1>Demo</h1>

<img src="https://github.com/andremenegassi/TableJS/blob/master/demo.png">

    <style>
        .myTable {
        
            border: 1px solid #000;
        }

        .myTable tr td {
        
            border: 1px solid #000;
        }

    </style>

    <div id="divContainer">
    </div>

    <script>

        var divContainer = document.getElementById("divContainer");

        var data = [
            {
                id: 1, name: "André", genre : "M"
            },
            {
                id: 2, name: "Vanessa", genre: "F"
            },
            {
                id: 3, name: "Malu", genre: "F"
            },
            {
                id: 4, name: "Amy", genre: "D"
            },
        ]

        var trTemplate = "<tr data-id=\"{id}\"> " +
                            "  <td>{name}</td>" +
                            "  <td data-genre=\"{genre}\"></td>" +
                            "  <td><a href=\"#\" data-ok>OK</a></td>" +
                        "</tr>"

        tablejs.generate(divContainer, data, trTemplate, {
            tableClassName: "myTable",
            columnsTitle: ["Name (My Family)", "Genre", ""],
            emptyText: "No rows.",
            rowDataBound: function (rowDOM, rowData) {

                var genreDetails = "";

                switch (rowData.genre) {
                    case "M": {
                        genreDetails = "Male";
                        break;
                    }
                    case "F": {
                        genreDetails = "Female";
                        break;
                    }
                    case "D": {
                        genreDetails = "Dog";
                        break;
                    }
                }

                rowDOM.querySelector("[data-genre]").innerHTML = genreDetails;

                rowDOM.querySelector("[data-ok]").onclick = function () {

                    var id = this.closest("tr").getAttribute("data-id");
                    alert(id);
                };
            }
        });

    </script>


