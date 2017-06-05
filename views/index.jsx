import React from 'react'

const index = (props) => (
    <html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Webpack Sample Project</title>
        <div id="data" data-react={JSON.stringify(props.store)}></div>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
    </html>
);

module.exports = index;
