import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export class Image extends React.Component {
    render() {
        return (
            <div className="image--container">
                {this.props.images.map((field) => {
                    return <img src={field.url} alt={field.defaultText} width={field.width} height={field.height}/>
                })}
            </div>
        );
    }
}

export class MapImage extends React.Component {
    render() {
        return (
            <div className="image--container">
                <img src={this.props.url} alt={this.props.defaultText} width={this.props.width} height={this.props.height} usemap="#{this.props.name}"/>
                <map name={this.props.name}>
                {this.props.mapImages.map((field) => {
                    return <area shape={field.form} coords={field.coordination} href={field.urlmap} alt={field.text}/>
                })}
                </map>
            </div>
        );
    }
}

Image.propTypes = {
    images: PropTypes.string.isRequired
    /*
    url: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
    */
}

MapImage.propTypes = {
    url: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
    mapImages: PropTypes.string.isRequired
    /*
    form: PropTypes.string.isRequired,
    coordination: PropTypes.string.isRequired,
    urlmap: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
    */
}