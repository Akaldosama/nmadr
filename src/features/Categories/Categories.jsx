import React from 'react'
import { useGetCategoryQuery, useAddCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } from './CategoriesSlice'
import { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default function Categories() {
  const {data: category} = useGetCategoryQuery()

  const [addCategory] = useAddCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()
  const [deleteCategory] = useDeleteCategoryMutation() 

  const [modal, setModal] = useState(false)

  const [name, setName] = useState('')

  const toggle = () => {
    setModal(false)
    setEdit('')
  }



  const handleAddCategory = (e) => {
    e.preventDefault()
    let payload ={
        name: name ? name : edit.name,
    }
    if(edit  !== ''){
        updateCategory({...payload, id: edit.id})
    }else{
        addCategory({...payload})
    }
    toggle()
}

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>
          Add Category
        </ModalHeader>
        <ModalBody>
          <form id='addForm' onSubmit={handleAddCategory}>
            <input type="text" placeholder='Name' defaultValue={edit.name} onChange={(e) => setName(e.target.value)} className='form-control my-2' />
          </form>
        </ModalBody>
        <ModalFooter>
          <button type='submit' form='addForm' className='btn btn-success'>Add</button>
        </ModalFooter>
      </Modal>
          <button className='btn btn-primary my-2' onClick={() => setModal(true)}>Add Product</button>
        <div className="parent">
          {
            category?.map((item, index) => {
              return <span key={index}>
                <p>{item.name}</p>
                <button onClick={deleteCategory(item.id)}></button>
              </span>
            })
          }
        </div>
     </div>
  )
}
