<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Project;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('home', ['projects' => Project::with('stacks')->get()]);
    }
}
