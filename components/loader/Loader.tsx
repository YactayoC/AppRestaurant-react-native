import { View } from 'react-native';
import { Bounce, Chase } from 'react-native-animated-spinkit';
import ReactNativeModal from 'react-native-modal';

interface Props {
  isLoading: boolean;
  isLoaderScreen?: boolean;
  colorLoader?: string;
}

export default function Loader({ isLoading, isLoaderScreen = true, colorLoader = '#e4e1e1' }: Props) {
  return (
    <>
      {isLoaderScreen ? (
        <ReactNativeModal isVisible={isLoading} style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Bounce size={80} color={colorLoader} />
          </View>
        </ReactNativeModal>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Chase size={80} color={colorLoader} />
        </View>
      )}
    </>
  );
}
