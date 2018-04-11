import { colors } from '../../config';

import { createViewStyles, createTextStyles } from '../../lib/styles';

export default {
  ...createViewStyles({
    red:{
      backgroundColor: colors.red95,
    },
    redHover: {
      backgroundColor: colors.red,
    },
    green:{
      backgroundColor: colors.green,
    },
    greenHover:{
      backgroundColor: colors.green90,
    },
    blue:{
      backgroundColor: colors.blue80,
    },
    blueHover:{
      backgroundColor: colors.blue60,
      backdropFilter: "blur(4px)",
    },
    transparent:{
      backgroundColor: colors.white20,
      backdropFilter: "blur(4px)",
    },
    transparentHover:{
      backgroundColor: colors.white40,
    },
    redTransparent:{
      backgroundColor: colors.red40,
      backdropFilter: "blur(4px)",
    },
    redTransparentHover:{
      backgroundColor: colors.red45,
      backdropFilter: "blur(4px)",
    },
    white80:{
      color: colors.white80,
    },
    white: {
      color: colors.white,
    },
    icon:{
      position: 'absolute',
      alignSelf: 'flex-end',
      right: 8,
      marginLeft: 8,
    },
    iconTransparent:{
      position: 'absolute',
      alignSelf: 'flex-end',
      right: 42,
    },
    common:{
      paddingTop: 9,
      paddingLeft: 9,
      paddingRight: 9,
      paddingBottom: 9,
      marginTop: 8,
      marginBottom: 8,
      marginLeft: 24,
      marginRight: 24,
      borderRadius: 4,
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    },
  }),
  ...createTextStyles({
    label:{
      alignSelf: 'center',
      fontFamily: 'DINPro',
      fontSize: 20,
      fontWeight: '900',
      lineHeight: 26,
      flex: 1,
    },
  }),
};