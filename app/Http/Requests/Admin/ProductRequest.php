<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "brend_id" => ['required', 'exists:brends,id'],
            "category_id" => ['required', 'exists:categories,id'],
            "title" => ['required'],
            "description" => ['required', 'min:5'],
            "rating" => ['required', 'numeric', 'min:0', 'max:5'],
            "price" => ['required', 'integer'],
            "status" => ['required'],
            "image" => ['nullable', 'image', 'mimes:png,jpg', 'max:2048'],
        ];
    }
}
