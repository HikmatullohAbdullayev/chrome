"use client"


import React, { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(true);
  const [formData, setFormData] = useState<{   title: string, url: string }>({
    title: '',
    url: ''
  });
  const formRef = useRef<null>(null);

  const modalClick = () => {
    setOpen(!open);
  };

  const closeModal = () => {
    if (formData.title && formData.url){

      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.url) {
      
      setData([...data, formData]);
      setOpen(!open);
      setFormData({ title: '', url: '' });
      console.log(formData);
      console.log(data);
      
    }
  };

  const deleteItem = (url: string) =>{
    
    console.log(url);
    setData(data.filter(item => item.url !== url))

  
    
  }

  const handleChange = (e, field:string) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <>
      <header></header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="wrapper">
          <div className="flex">
            <div className="flex flex-col">
              <h1>Google</h1>
              <form className="flex gap-2">
                <label htmlFor="search">
                  <span>Search</span>
                </label>
                <div className="inp">
                  <input type="text" name="search" id="search" />
                </div>
                <span>googleMic</span>
                <span>googleImg</span>
              </form>
              <ul className="flex justify-between">
                {data.map((item, index) => (
                  <li key={index} className="flex flex-col gap-2">
                   
                   <a target='blank' href={item.url}>
                   
                   <div className="img">
                      <p className='uppercase'>{item.url[0]}</p>
                    </div>
                    <div className="flex gap-2">
                    <h2>{item.title}</h2>
                    </div>
                   </a>
                   <button onClick={() => deleteItem(item.url)}>delete</button>

                  </li>
                ))}
                <li onClick={modalClick}>
                  <div className="btn">
                    <p>+</p>
                  </div>
                  <h2>Add shortcut</h2>
                </li>
              </ul>

              <div className={` ${!open ? 'inline-block' : 'hidden'}`}>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleChange(e, 'title')}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="url">URL:</label>
                    <input
                      type="text"
                      id="url"
                      value={formData.url}
                      onChange={(e) => handleChange(e, 'url')}
                      required
                    />
                  </div>
                  <button type="submit">Saqlash</button>
                  <button onClick={closeModal} className="m-3">
                    Yopish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
