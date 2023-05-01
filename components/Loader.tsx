import { View, Text, Modal } from 'react-native';
import { Bounce } from 'react-native-animated-spinkit';

interface Props {
  isLoading: boolean;
}

export default function Loader({ isLoading }: Props) {
  return (
    <Modal visible={isLoading} transparent>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Bounce size={80} color="#e4e1e1" />
        </View>
      </View>
    </Modal>
  );
}
