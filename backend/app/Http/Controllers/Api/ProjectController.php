<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $project = Project::get();
        return response()->json([
            'message' => 'Project list',
            'status' => true,
            'data' => $project
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    

        // $imageName = time() . '.' . $image->getClientOriginalExtension();
        
        // $image->move(public_path('images'), $imageName);
    
        // $url = asset('images/' . $imageName);
    
        $data = $request->all();
        $data['slug'] = Str::slug($request->title);
        if($request->hasFile('image'))
        {
            $image = $request->file('image')->store('images', 'public');
            $data['image'] = $image;
        }
    
        Project::create($data);
    
        return response()->json([
            'success' => true,
            'message' => 'Data Berhasil di buat'
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return response()->json([
            'message' => 'Data Berhasil di temukan',
            'data' => $project,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
