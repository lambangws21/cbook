import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import NursingCareApp from '../diagnosatabel/page'
import TextGenerate from '@/app/pages/textgenerate/page'

const ViewDataText = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Diagnosa Dan TextGenerete</CardTitle>
                <CardContent>
                    <div className='w-full flex flex-1 justify-center gap-2 items-center bg-slate-200'>
                        <div className="w-1/2">
                            <NursingCareApp/>
                        </div>
                        <div className="w-1/2">
                            <TextGenerate/>
                        </div>
                    </div>
                </CardContent>
            </CardHeader>
        </Card>
    )
}

export default ViewDataText