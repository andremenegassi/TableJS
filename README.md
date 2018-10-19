# TableJS - Gerador de tabela dinâmica a partir de código Javascript.

<h1>Demo</h1>


<img src="data:image/png;base64,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" />


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
