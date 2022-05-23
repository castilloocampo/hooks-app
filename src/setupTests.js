
import '@testing-library/jest-dom';

import '@testing-library/jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter, { createSerializer } from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

