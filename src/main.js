import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <h1>hello world</h1>;
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}
