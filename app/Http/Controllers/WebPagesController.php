<?php

namespace App\Http\Controllers;

use App\Models\WebPage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WebPagesController extends Controller
{
    public function index()
    {
        $webPages = WebPage::query()
                    ->where('user_id', Auth::user()->id)
                    ->where('is_active', 1)
                    ->orderBy('id', 'desc')
                    ->get();

        return Inertia::render('WebPage/List/index', [
            'webPages' => $webPages
        ]);
    }

    public function add()
    {
        $webPages = WebPage::query()
                    ->where('user_id', Auth::user()->id)
                    ->orderBy('id', 'desc')
                    ->where('is_active', 1)
                    ->take(5)
                    ->get();
        return Inertia::render('WebPage/Add/index', [
            'webPages' => $webPages
        ]);
    }

    public function getPreviewData(Request $request)
    {
        $post = $request->validate([
            'link' => 'required',
        ]);

        $data = \OpenGraph::fetch($post['link'], true);

        $webpage = WebPage::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'type' => $data['type'],
            'url' => $post['link'],
            'image_url' => $data['image'],
            'user_id' => $request->user()->id,
        ]);

        return redirect()
            ->route('web-pages-view', ['webPage' => $webpage->id]);
    }

    public function view(WebPage $webPage)
    {
        if ((string)Auth::user()->id !== $webPage->user_id) {
            abort(401, 'You are not allowed to view this bookmark');
        }
        $webPages = WebPage::query()
                    ->where('user_id', Auth::user()->id)
                    ->where('is_active', 1)
                    ->orderBy('id', 'desc')
                    ->take(5)
                    ->get();

        return Inertia::render('WebPage/View/index', [
            'webpage' => $webPage,
            'webPages' => $webPages
        ]);
    }

    public function makeActive(Request $request)
    {
        $webPage = WebPage::findOrFail($request->id);
        $webPage->is_active = 1;
        $webPage->save();
        return redirect()->route('web-pages');
    }

    public function destory(Request $request)
    {
        $webPage = WebPage::findOrFail($request->id);

        if ((string)Auth::user()->id !== $webPage->user_id) {
            abort(401, 'You are not allowed to view this bookmark');
        }
        $webPage->delete();
        
        return redirect()->route('web-pages');
    }
}
