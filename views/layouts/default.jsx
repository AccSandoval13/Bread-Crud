const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
        <title>{html.title || 'Default'}</title>  
        <link rel="stylesheet" href="/main.css"/>

    </head>
    <body>
      <h1>HTML Rendered!</h1>
      <div className="container"> {/* classNmae is class in React  */}
        {html.children}
      </div>
    </body>
    </html>
  )
}

module.exports = Default
