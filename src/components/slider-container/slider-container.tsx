import { Slider } from '@miblanchard/react-native-slider';
import React from 'react';

import { Text, View } from '@/ui';

import { styles, trackMarkStyles } from './styles';

const DEFAULT_VALUE = 18;

const SliderContainer = (props: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
  vertical?: boolean;
}) => {
  const { caption, sliderValue, trackMarks } = props;
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE
  );
  let renderTrackMarkComponent: (index: number) => React.ReactNode;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number): React.ReactNode => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }
  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }
      return child;
    });
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        <Text>{caption}</Text>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
};

export default SliderContainer;
