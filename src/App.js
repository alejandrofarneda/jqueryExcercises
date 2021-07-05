import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

$(document).ready(function () {
    $('.button').click(function () {
        $('.App-logo').hide(
            ('slow',
            function () {
                alert($('.App-link').text());
            })
        );
    });
    $('.App-link').css('color', 'red').slideUp(2000).slideDown(2000);
    $('#btn1').click(function () {
        $('#test1').text('Conoces el nombre del pato?');
    });
    $('#btn2').click(function () {
        $('#test1').html(function (i, origText) {
            $('#test2').text(function () {
                return 'Realmente no ' + origText;
            });
        });
    });
    $('#btn3').click(function () {
        $('#test3').val('Dolly Duck');
    });
    //Attr
    $('.googleButton').click(function () {
        $('.googleButton').hide();
        $('.googleMe')
            .text('Google/jquery')
            .attr('href', function (i, origValue) {
                return (
                    origValue +
                    '/search?q=jquery&sxsrf=ALeKk03vEli-MEnK2ELvhrgl-5bs0YnSSw%3A1625484059985&source=hp&ei=G-viYLukN9GYaabLn2A&iflsig=AINFCbYAAAAAYOL5KzpseinLHEeHzkWtrvpAQwTxClON&oq=jquery&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEM6CgguEOoCECcQkwI6BwgjEOoCECc6BwguEOoCECc6CwguELEDEIMBEJMCOggILhCxAxCDAToECAAQAzoICAAQsQMQgwE6CAguEMcBEKMCOg4ILhCxAxCDARDHARCjAjoLCC4QsQMQxwEQowI6BQgAELEDOgIILjoECC4QJzoGCCMQJxATOgUILhCxAzoICC4QxwEQrwE6BAguEEM6AggAOgcILhCxAxAKOgQIABAKOgcIABCxAxAKOgcIABAKEMsBOgoIABCxAxCDARAKOgcIIxCxAhAnUMwRWIAyYOgzaAdwAHgAgAGQAYgBnwqSAQMzLjmYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=gws-wiz&ved=0ahUKEwj7ner_58vxAhVRTBoKHablBwwQ4dUDCAk&uact=5'
                );
            });
    });
    //Rmv
    $('.rmv-button').click(function () {
        $('p').remove('.test, .demo');
    });
    //Css
    $('.color-button').click(function () {
        return $('.p-color').css({ backgroundColor: 'yellow', color: 'black' });
    });
    //inner-Outter
    $('.dim-button').click(function () {
        var txt = '';
        txt += 'Width: ' + $('#div1').width() + '</br>';
        txt += 'Height: ' + $('#div1').height();
        $('#div1').html(txt);
    });

    $('#myInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#myTable tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
    $('td, th').css({
        border: 'solid',
        borderColor: 'white',
        textAlign: 'left',
        padding: 8,
    });
    $('tr:nth-child(even)').css({
        backgroundColor: '#dddddd',
        color: 'black',
    });
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div
                    className="button"
                    style={{
                        cursor: 'default',
                        border: 'solid',
                        borderColor: 'white',
                    }}
                >
                    Esto es un Boton
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <div style={{ color: 'green' }}>
                    ------------------------------------------------------------------------------------------------------------------------
                </div>

                <p id="test1">Esto es un párrafo</p>
                <p id="test2">Esto es otro párrafo</p>

                <input
                    type="text"
                    id="test3"
                    value="Mickey Mouse"
                    style={{ textAlign: 'center' }}
                />
                <div style={{ display: 'flex', margin: 5, gap: 5 }}>
                    <button id="btn1">Set Text</button>
                    <button id="btn2">Set HTML</button>
                    <button id="btn3">Set Value</button>
                </div>

                <div style={{ color: 'green' }}>
                    ------------------------------------------------------------------------------------------------------------------------
                </div>
                <a
                    className="googleMe"
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: 'default', color: 'white' }}
                >
                    Google Me!
                </a>
                <div
                    className="googleButton"
                    style={{
                        margin: 5,
                        cursor: 'default',
                        border: 'solid',
                        borderColor: 'white',
                    }}
                >
                    Add a parameter to Link
                </div>

                <div style={{ color: 'green' }}>
                    ------------------------------------------------------------------------------------------------------------------------
                </div>

                <p>Esto es un párrafo sin class.</p>
                <p class="test">Párrafo con class="test".</p>
                <p class="test">Párrafo con class="test".</p>
                <p class="demo">Párrafo con class="demo".</p>

                <button className="rmv-button">
                    Eliminar todos los párrafos con class="test" y "demo"
                </button>

                <div style={{ color: 'green' }}>
                    ------------------------------------------------------------------------------------------------------------------------
                </div>

                <p className="p-color" style={{ backgroundColor: 'red' }}>
                    This is a paragraph.
                </p>
                <p style={{ backgroundColor: '#00ff00' }}>
                    This is a paragraph.
                </p>
                <p style={{ backgroundColor: '#0000ff' }}>
                    This is a paragraph.
                </p>

                <button className="color-button">
                    Cambia a amarillo el primer párrafo
                </button>

                <div style={{ color: 'green' }}>
                    ------------------------------------------------------------------------------------------------------------------------
                </div>

                <div
                    id="div1"
                    style={{
                        height: 100,
                        width: 300,
                        padding: 10,
                        margin: 3,
                        border: 1,
                        borderColor: 'white',
                        color: 'black',
                        backgroundColor: 'lightblue',
                    }}
                ></div>
                <br />

                <button className="dim-button">
                    Display dimensions of div
                </button>

                <div style={{ color: 'green' }}>
                    ------------------------------------------------------------------------------------------------------------------------
                </div>

                <p>Escribe en el input para buscar coincidencias en la tabla</p>
                <input id="myInput" type="text" placeholder="Search.." />
                <br></br>

                <table
                    style={{
                        fontFamily: 'arial, sans-serif',
                        borderCollapse: 'collapse',
                        marginBottom: 15,
                    }}
                >
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                        <tr>
                            <td>Juan</td>
                            <td>Perez</td>
                            <td>juan@example.com</td>
                        </tr>
                        <tr>
                            <td>Maria</td>
                            <td>Fernanda</td>
                            <td>marifer@mail.com</td>
                        </tr>
                        <tr>
                            <td>Julieta</td>
                            <td>Farneda</td>
                            <td>july@greatstuff.com</td>
                        </tr>
                        <tr>
                            <td>Ana</td>
                            <td>Mercado</td>
                            <td>a_m@test.com</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ color: 'green' }}>
                    ------------------------------------------------------------------------------------------------------------------------
                </div>
            </header>
        </div>
    );
}

export default App;
