import React, { PropTypes } from 'react'

function Loader(props, context) {

    const currentLang = context.locale[context.lang] || context.locale['en'];

    return (
        <h2>{currentLang.loadingMsg}</h2>
    )
}

Loader.propTypes = {
}



Loader.contextTypes = {
    lang: PropTypes.string,
    locale: PropTypes.object
};

export default Loader