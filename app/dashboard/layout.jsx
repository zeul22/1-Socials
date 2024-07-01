import { RedirectToSignIn } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
    <SignedIn>
        <div>
           {children}
        </div>
    </SignedIn>
    <SignedOut>
        <RedirectToSignIn />
    </SignedOut>
    </div>
  )
}

export default DashboardLayout