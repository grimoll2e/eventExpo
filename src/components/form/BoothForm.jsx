import React from 'react'
import Button from '../Button'
import TextInput from '../TextInput'
import ImageInput from '../ImageInput'

export default function BoothForm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="d-flex flex-column gap-3 col-lg-5 col-md-6 align-items-center ">
                    <ImageInput />
                    <div className="d-flex gap-2">
                        <Button text={'Save'} />
                        <Button text={'Cancle'} />
                        <Button text={'Edit'} />
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <form action="" className="d-flex flex-column gap-2">
                        <TextInput name={'Booth title'} />
                        <TextInput name={'Descrition'} />
                        <TextInput name={'Link'} />
                        <div className="d-flex justify-content-center gap-2">
                            <Button text={'Save'} />
                            <Button text={'Cancle'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
