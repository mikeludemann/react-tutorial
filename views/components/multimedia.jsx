import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export class Video extends React.Component {
    render() {

        const title = this.props.title ? this.props.title : this.props.src;

        return (
            <div className="video--container">
                <video
                    controls={this.props.controls}
                    poster={this.props.poster}
                    loop={this.props.loop}
                    muted={this.props.muted}
                    autoPlay={this.props.autoPlay}
                    preload={this.props.preload}
                    id={this.props.id}
                    title={title}
                >
                    {this.props.videos.map((field) => {
                        return <source src={field.videoSource} type={field.type} />
                    })}
                    {this.props.tracks.map((field) => {
                        return <track src={field.trackSource} kind={field.kind} srclang={field.languageSource} label={field.label} />
                    })}
                    {this.props.notSupportedText}
                </video>
            </div>
        );
    }
}

export class Audio extends React.Component {
    render() {

        const title = this.props.title ? this.props.title : this.props.src;

        return (
            <div className="audio--container">
                <audio
                    controls={this.props.controls}
                    crossOrigin={this.props.crossOrigin}
                    loop={this.props.loop}
                    muted={this.props.muted}
                    autoPlay={this.props.autoPlay}
                    preload={this.props.preload}
                    id={this.props.id}
                    title={title}
                >
                    {this.props.audios.map((field) => {
                        return <source src={field.audioSource} type={field.type} />
                    })}
                    {this.props.notSupportedText}
                </audio>
            </div>
        );
    }
}

export class Embed extends React.Component {
    render() {
        return (
            <div className="embed--container">
                <embed src={this.props.source} type={this.props.type} />
            </div>
        );
    }
}

export class Object extends React.Component {
    render() {
        return (
            <div className="object--container">
                <object data={this.props.source} type={this.props.type} name={this.props.name}/>
            </div>
        );
    }
}

Video.propTypes = {
    controls: PropTypes.bool,
    poster: PropTypes.string,
    muted: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
    id: PropTypes.string,
    title: PropTypes.string,
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            videoSource: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    tracks: PropTypes.arrayOf(
        PropTypes.shape({
            trackSource: PropTypes.string.isRequired,
            kind: PropTypes.string.isRequired,
            languageSource: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    notSupportedText: PropTypes.string.isRequired
}

Audio.propTypes = {
    controls: PropTypes.bool,
    crossOrigin: PropTypes.string,
    muted: PropTypes.bool,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    preload: PropTypes.oneOf(["", "none", "metadata", "auto"]),
    id: PropTypes.string,
    title: PropTypes.string,
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            audioSource: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    notSupportedText: PropTypes.string.isRequired
}

Embed.propTypes = {
    source: PropTypes.string.isRequired,
    type: PropTypes.string
}

Object.propTypes = {
    source: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string
}