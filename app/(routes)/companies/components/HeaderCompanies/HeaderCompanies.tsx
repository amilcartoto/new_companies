"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import { useState } from "react"
import { FormCreateCompanies } from "../FormCreateCustomer"


export function HeaderCompanies() {
    const [openModal, setOpenModal] = useState(false)

    return (
    <div className="flex items-center justify-between ">
        <h2 className="text-2xl"> List of companies </h2>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpenModal(true)}>Create Company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>
              Create and configure your customer
            </DialogDescription>
          </DialogHeader>


          <FormCreateCompanies />
        </DialogContent>
      </Dialog>
    </div>
  )
}
