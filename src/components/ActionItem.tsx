import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {spacing} from '../constants/dimensions';
import {rootFonts} from '../constants/fonts';

const ActionItem = ({
  title,
  callback,
  icon,
}: {
  title: string;
  callback: () => void;
  icon: React.ReactNode;
}) => {
  return (
    <TouchableOpacity
      style={styles.settingContainer}
      activeOpacity={0.5}
      onPress={callback}>
      {icon}
      <Text style={styles.settingText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.normal,
    height: 50,
  },
  settingText: {
    marginLeft: spacing.normal,
    fontFamily: rootFonts.medium,
    fontSize: 18,
  },
});

export default ActionItem;
