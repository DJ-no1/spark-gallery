'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2, PlusCircle } from 'lucide-react'
import { Dialog } from '@radix-ui/react-dialog';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';

function UploadButton() {
    const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);
    const form = ({
        defaultValues: {
          title: "",
          file: undefined,
        },
      });
  return (
    <>
    <div>
        <Button size="sm" className="h-7 gap-1">
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Website
        </span>
      </Button>
      
        </div>

        <div>
            <Dialog
      open={isFileDialogOpen}
      onOpenChange={(isOpen) => {
        setIsFileDialogOpen(isOpen);
        // form.reset();
            
    }}
    >
      <DialogTrigger asChild>
        <Button>Upload File</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-8">Upload your File Here</DialogTitle>
          <DialogDescription>
            This file will be accessible by anyone in your organization
          </DialogDescription>
        </DialogHeader>

        <div>
          <form {...form}>
            <form >
              {/* <FormField
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.defaultValues}
                name="file"
                render={() => (
                  <FormItem>
                    <FormLabel>File</FormLabel>
                    <FormControl>
                      <Input type="file" {...Form} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <Button
                type="submit"
                // disabled={form. defaultValues.isSubmitting}
                // className="flex gap-1"
              >
                {/* {form. defaultValues.isSubmitting && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )} */}
                Submit
              </Button>
            </form>
          </form>
        </div>
      </DialogContent>
    </Dialog>
        </div>
        </>
  )
}

export default UploadButton