import React from 'react'
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss'
import Aside from './aside';

const LayoutExample: React.FC = () => {
  return (
    <>
      <h3>上中下布局</h3>
      <Layout style={{height:300, width: 500}}>
        <Header className='h'/>
        <Content className='c'/>
        <Footer className='f'/>
      </Layout>
      <h3>上左次右主下布局</h3>
      <Layout style={{height:300, width: 500}}>
        <Header className='h'/>
        <Layout>
          <Aside className='a'/>
          <Content className='c'/>
        </Layout>
        <Footer className='f'/>
      </Layout>
      <h3>上左主右次下布局</h3>
      <Layout style={{height:300, width: 500}}>
        <Header className='h'/>
        <Layout>
          <Content className='c'/>
          <Aside className='a'/>
        </Layout>
        <Footer className='f'/>
      </Layout>
      <h3>侧边布局</h3>
      <Layout style={{height:300, width: 500}}>
        <Aside className='a'/>
        <Layout>
          <Header className='h'/>
          <Content className='c'/>
          <Footer className='f'/>
        </Layout>
      </Layout>
    </>


  )
}

export default LayoutExample