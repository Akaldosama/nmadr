import React from 'react'
import { useGetAuthorsQuery, useAddAuthorMutation, useUpdateAuthorMutation, useDeleteAuthorMutation } from './AuthorSlice'
import { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import '../all.css'

export default function Authors() {
  const {data: author} = useGetAuthorsQuery()

  const [addAuthor] = useAddAuthorMutation()
  const [updateAuthor] = useUpdateAuthorMutation()
  const [deleteAuthor] = useDeleteAuthorMutation() 

  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState('')


  const [full_name, setFullname] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [country, setCountry] = useState('')
  const [image, setImage] = useState('')


  const toggle = () => {
    setModal(false)
    setEdit('')
  }

  const openEditModal = (item) => {
    setEdit(item)
    setModal(true)
  }

  const handleAddAuthors = (e) => {
    e.preventDefault()
    let payload ={
        full_name: full_name ? full_name : edit.full_name,
        birthdate: birthdate ? birthdate : edit.birthdate,
        country: country ? country : edit.country,
        image: image ? image : edit.image
    }
    if(edit  !== ''){
        updateAuthor({...payload, id: edit.id})
    }else{
        addAuthor({...payload})
    }
    toggle()
}

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          Add Product
        </ModalHeader>
        <ModalBody>
          <form>
            <input type="text" placeholder='Full name' defaultValue={edit.full_name} onChange={(e) => setFullname(e.target.value)} className='form-control my-2' />
            <input type="text" placeholder='Birthdate' defaultValue={edit.birthdate} onChange={(e) => setBirthdate(e.target.value)} className='form-control my-2' />
            <input type="text" placeholder='Country' defaultValue={edit.country} onChange={(e) => setCountry(e.target.value)} className='form-control my-2' />
            <input type="file" placeholder='Image' defaultValue={edit.image} onChange={(e) => setImage(e.target.value)} className='form-control my-2' />
          </form>
        </ModalBody>
        <ModalFooter>
          <button type='submit' className='btn btn-success' onClick={handleAddAuthors}>Add</button>
        </ModalFooter>
      </Modal>
          <button className='btn btn-primary my-2' onClick={() => setModal(true)}>Add Authors</button>
        <div className="parent">
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Fullname</th>
                <th>Birthdate</th>
                <th>Country</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                author?.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.full_name}</td>
                    <td>{item.birthdate}</td>
                    <td>{item.country}</td>
                    <td>
                      <img src={item.image} alt="" className='image' />
                    </td>
                    <td className='d-flex gap-3'>
                      <button onClick={() => openEditModal(item)} className='btn btn-info'>Edit</button>
                      <button onClick={() => deleteAuthor(item.id)} className='btn btn-dark'>Delete</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
     </div>
  )
}
