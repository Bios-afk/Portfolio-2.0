<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Stack;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Portfolio 2.0',
                'description' => 'Refonte de mon portfolio personnel avec Laravel et React.',
                'image' => 'projects/portfolio.png',
                'stacks' => ['Laravel', 'PHP', 'React', 'JavaScript'],
            ],
            [
                'title' => 'E-commerce Dashboard',
                'description' => 'Tableau de bord de gestion des commandes pour une boutique en ligne.',
                'image' => 'projects/ecommerce-dashboard.png',
                'stacks' => ['Laravel', 'React'],
            ],
            [
                'title' => 'API Météo',
                'description' => 'API REST agrégeant plusieurs sources de données météorologiques.',
                'image' => 'projects/weather-api.png',
                'stacks' => ['Laravel', 'PHP'],
            ],
        ];

        foreach ($projects as $projectData) {
            $stackNames = $projectData['stacks'];
            unset($projectData['stacks']);

            $project = Project::updateOrCreate(
                ['slug' => Str::slug($projectData['title'])],
                $projectData
            );

            $stackIds = Stack::whereIn('name', $stackNames)->pluck('id');
            $project->stacks()->sync($stackIds);
        }
    }
}
