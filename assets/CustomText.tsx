import { Component } from "react";
import { Text } from "react-native";
import { vw } from "./stylesheet";

export class Nunito12Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoMedium', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoMedium', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoMedium', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Med extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoMedium', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito10Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoRegular', fontSize: vw(2.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoRegular', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoRegular', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoRegular', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito24Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoRegular', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Reg extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoRegular', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito20Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito22Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito24Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14ExBold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoExtraBold', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito28Bold extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBold', fontSize: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito28Black extends Component<{ children: React.ReactNode, style?: any, lineNumber?: number }> {
    render() {
        const { children, style, lineNumber } = this.props;

        return (
            <Text numberOfLines={lineNumber} style={[{ fontFamily: 'NunitoBlack', fontSize: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}