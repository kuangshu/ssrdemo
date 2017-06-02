import React from 'react'

const index = (props) => (
    <html>
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Webpack Sample Project</title>
    </head>
    <body>
        <div id="root" data-redux={JSON.stringify(props.store)}></div>
        <script src="bundle.js"></script>
    </body>
    </html>
);

module.exports = index;
