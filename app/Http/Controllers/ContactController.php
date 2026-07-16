<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMessageReceived;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request): RedirectResponse
    {
        $validatedData = $request->validated();

        Mail::to(config('mail.contact_recipient'))->send(new ContactMessageReceived(
            name: $validatedData['name'],
            email: $validatedData['email'],
            message: $validatedData['message'],
        ));


        return back();
    }
}
