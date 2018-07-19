import React from 'react';
import PropTypes from 'prop-types';

export class Image extends React.Component {
    render() {
        return (
            <div className="image--container">
                {this.props.images.map((field) => {
                    return <img src={field.imageSource} alt={field.defaultText} width={field.width} height={field.height} />
                })}
            </div>
        );
    }
}

export class MapImage extends React.Component {
    render() {
        return (
            <div className="image--container">
                <img src={this.props.imageSource} alt={this.props.defaultText} width={this.props.width} height={this.props.height} usemap={'#' + this.props.name} />
                <map name={this.props.name}>
                    {this.props.mapImages.map((field) => {
                        return <area shape={field.form} coords={field.coordination} href={field.urlmap} alt={field.text} />
                    })}
                </map>
            </div>
        );
    }
}

export class Picture extends React.Component {
    render() {
        return (
            <div className="picture--container">
                <picture>
                    {this.props.pictures.map((field) => {
                        return <source media={field.mediaSource} srcset={field.settingSource} />
                    })}
                    <img src={this.props.imageSource} alt={this.props.defaultText} />
                </picture>
            </div>
        );
    }
}

Image.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            imageSource: PropTypes.string.isRequired,
            defaultText: PropTypes.string.isRequired,
            width: PropTypes.string,
            height: PropTypes.string
        }).isRequired
    ).isRequired
}

MapImage.propTypes = {
    imageSource: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string.isRequired,
    mapImages: PropTypes.arrayOf(
        PropTypes.shape({
            form: PropTypes.string.isRequired,
            coordination: PropTypes.string.isRequired,
            urlmap: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

Picture.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            mediaSource: PropTypes.string.isRequired,
            settingSource: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    imageSource: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired
}