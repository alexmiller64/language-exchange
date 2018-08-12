import React, { Component } from 'react';

class AnimatedText extends Component {

    state = {
        words: []
    }

    updateWords(originalText) {
        this.setState({
            words: originalText.split('')
        });
    }

    componentDidMount() {
        this.updateWords(this.props.content)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.content !== this.props.content) {
            this.updateWords(nextProps.content)
        }
    }

    render() {
        const { words } = this.state


        const CustomTag = `${this.props.tag}`;

        return (
            <CustomTag className="anim-text-flow">
                {words.map((letter, index) => <span key={index}>{letter}</span>)}
            </CustomTag>
        )
    }

}

export default AnimatedText