import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

export class Video extends React.Component {
    render() {
        return (
            <div className="video--container">
                <video>
                    {this.props.videos.map((field) => {
                        return <source src={field.videoSource} type={field.type}/>
                    })}
                    {this.props.tracks.map((field) => {
                        return <track src={field.trackSource} kind={field.kind} srclang={field.languageSource} label={field.label}/>
                    })}
                    {this.props.notSupportedText}
                </video>
            </div>
        );
    }
}

export class Audio extends React.Component {
    render() {
        return (
            <div className="audio--container">
                <audio>
                    {this.props.audios.map((field) => {
                        return <source src={field.audioSource} type={field.type}/>
                    })}
                    {this.props.notSupportedText}
                </audio>
            </div>
        );
    }
}

/**
 * Video Setup
 * 
 * Settig parameters
 * 
 * - controls
 * - loop
 * - autoplay
 * - muted
 * - preload (none / metadata / auto)
 * - poster
 */

/**
 * Audio Setup
 * 
 * Setting parameters
 * 
 * - controls
 * - loop
 * - autoplay
 * - muted
 * - preload (none / metadata / auto)
 */


Video.propTypes = {
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
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            audioSource: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    notSupportedText: PropTypes.string.isRequired
}