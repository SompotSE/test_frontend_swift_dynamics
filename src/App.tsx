import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';

import Home from './Home';
import FormAndTable from "./FormAndTable";
import MoveShape from "./MoveShape";
import { useTranslation } from "react-i18next";
import { Select } from 'antd';
import './i18next'
import './FormAndTable.css';

const { Header, Footer, Content } = Layout;
const { Option } = Select;


function App() {
  const { i18n } = useTranslation();

  const onClickLanguageChange = (value: any) => {
    i18n.changeLanguage(value)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header>
            <div className="Headerlan">
              <Select
                defaultValue={i18n.language}
                onChange={onClickLanguageChange}
                style={{ width: 100 }}
              >
                <Option value="en">อังกฤษ</Option>
                <Option value="th">ไทย</Option>
              </Select>
            </div>
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MoveShape" element={<MoveShape />} />
              <Route path="/FormAndTable" element={<FormAndTable />} />
            </Routes>
          </Content>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

