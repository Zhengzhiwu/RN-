import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import PropTypes from 'prop-types';

export default class TabBarItem extends Component {

    static propTypes = {
        focus: PropTypes.bool.isRequired,
        defaultImage: PropTypes.number.isRequired,
        selectedImage: PropTypes.number.isRequired,
    };

    static defaultProps = {
        focus: false,
    };

    render() {
        return (
            <Image
                source={this.props.focus ? this.props.selectedImage : this.props.defaultImage}
                style={styles.tabBarItem}
            />
        )
    }
}


const styles = StyleSheet.create({
    tabBarItem: {
        width: 20,
        height: 20,
    }
});