import { ButtonProps as CommonButtonProps } from '../../../../ui/common';
import { Button as RnButton } from '@rneui/themed'

interface ButtonProps extends CommonButtonProps {
  isSelected?: boolean
}

const Button = ({ isSelected, containerStyle, ...styles }: ButtonProps) => {

  const { 
    title, 
    fontSize, 
    fontWeight,
    ...rest 
  } = styles

  return (
    <RnButton 
      containerStyle={ containerStyle }
      title={ title }
      titleStyle={{ 
        color: isSelected ? 'white' : '#555', 
        fontSize, 
        fontWeight 
      }}
      buttonStyle={{ 
        backgroundColor: isSelected ? '#68af50' : '#f8f8f8',
        ...rest
      }}
      radius='md'
    />
  )
}

export default Button