import { Wrapper } from './styled';

export interface IBaseTemplate {
  sampleProp?: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleProp }) => {
  return <Wrapper>{sampleProp}</Wrapper>;
};

export default BaseTemplate;
