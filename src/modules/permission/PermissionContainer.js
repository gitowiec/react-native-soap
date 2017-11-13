import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { StyleSheet, Text, TouchableOpacity, View, Keyboard, TextInput, ListView, Dimensions } from 'react-native';

import SimpleButtonView from '../simpleButton/SimpleButtonView'

const { width, height } = Dimensions.get("window");

let _ = require('lodash')

export default PermissionScreen = (props) => {
    let {
        stateKey,
        permissions
    } = props

    console.log("PRIZA", props)

    class PermissionScreenContainer extends Component {
        constructor(props) {
            super(props)

            this.state = {
                acceptedPermissions: []
            }
        }

        componentWillMount() {
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })

            this.dataSource = ds.cloneWithRows(permissions)

            let permissionsArray = _.map(permissions, 'permission')
            let requiredPermissionArray = _.map(_.filter(permissions, 'required'), 'permission')

            this.setState({
                permissions: permissionsArray,
                requiredPermissions: requiredPermissionArray
            })

        }

        _allowSkip = () => {
            let {acceptedPermissions, requiredPermissions} = this.state 

            console.log("WHA", acceptedPermissions, requiredPermissions)

            let permissionsLeft = _.difference(requiredPermissions, acceptedPermissions).length

            console.log("LEFT", permissionsLeft)

            return permissionsLeft === 0 ? "SKIP" : null
        }

        _selectPermission = (permission) => {
            console.log('PERMIOSS', permission)

            this.setState((state) => {
                console.log('STATE', state)
                if (state.acceptedPermissions.indexOf(permission) === -1) {
                    return {
                        acceptedPermissions: state.acceptedPermissions.concat(permission)
                    }
                }
            }, () => {
                let {permissions, acceptedPermissions} = this.state 

                if (_.difference(permissions, acceptedPermissions).length === 0) {
                    this.props.screenProps.saveSetting(stateKey, this.state.acceptedPermissions, () => this.props.screenProps.next())
                }
            })
        }

        _renderPermission = ({
            permission,
            title,
            subtitle,
            required
        }) => {
            console.log("RENDER", permission)
            return (
                <TouchableOpacity
                    onPress={this._selectPermission.bind(null, permission)}
                    activeOpacity={0.7}
                    style={styles.permissionContainerStyle}>
                    <View
                        style={styles.iconView}
                    >
                    </View>
                    <View style={styles.optionText}>
                        <Text style={styles.optionTextHeader}>{title}</Text>
                        <Text style={styles.optionTextDescription}>{subtitle}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        _renderPermissions = () => {
            return (
                <ListView
                    style={styles.permissionsContainerStyle}
                    dataSource={this.dataSource}
                    renderRow={this._renderPermission}
                />
            )
        }

        onChange = (data) => {
            this.setState({ input: data })
        }

        _onPress = (values) => {
            Keyboard.dismiss();
            this.props.screenProps.saveSetting(stateKey, this.state.input, () => this.props.screenProps.next())
        }

        render() {
            return (
                <SimpleButtonView {...props} {...this.props}
                    onPress={this._onPress}
                    hideButton={true}
                    footer={null}
                    right={this._allowSkip()}
                    middle={this._renderPermissions()} />
            )
        }
    }

    return PermissionScreenContainer
}

const styles = StyleSheet.create({
    widgetContainerStyle: {
        backgroundColor: 'transparent'
    },
    inputTextStyle: {
        fontSize: 34,
        fontWeight: "500",
        textAlign: 'center',
        width: 300,
        borderBottomWidth: 0.4,
        borderBottomColor: 'gray'
    },
    permissionsContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        marginRight: 15,
        marginLeft: 15
    },
    permissionContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: "center",
        height: 100,
        flexWrap: 'wrap',
        marginTop: 20,
        width: width-40,
        borderWidth: 1,
        borderRadius: 6
    },
    iconView: {
        width: '30%',
        height: 60,
        backgroundColor: 'green'
    },
    optionText: {
        width: '70%',
        paddingLeft: 20,
    },
    optionTextHeader: {
        fontSize: 20,
    },
    optionTextDescription: {
        fontSize: 15,
        opacity: 0.6,
        marginTop: 5
    },
});