import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import sinon from "sinon";
import toJson from "enzyme-to-json";

import App from "./App";

configure({ adapter: new Adapter() });

describe(__filename, () => {
  const wrapper = shallow(<App />);

  it("should render correctly with data", () => {
    expect(toJson(wrapper)).toBe.matchSnapshot();
  });
});
