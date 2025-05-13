
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';

interface ImageUploaderProps {
  currentImage?: string;
  onImageSelected: (imageUrl: string) => void;
}

export default function ImageUploader({ currentImage, onImageSelected }: ImageUploaderProps) {
  const [imageUrlInput, setImageUrlInput] = useState(currentImage || '');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImage || null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrlInput(e.target.value);
    if (e.target.value) {
      setPreviewUrl(e.target.value);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setIsUploading(true);
      try {
        // For a real application, you would upload the file to a server here
        // For this example, we'll simulate a successful upload by using the local preview URL
        
        // This is where you'd upload to a server in a real implementation
        // const formData = new FormData();
        // formData.append('file', selectedFile);
        // const response = await fetch('/api/upload', { method: 'POST', body: formData });
        // const data = await response.json();
        // const uploadedUrl = data.imageUrl;
        
        // For now, we'll use the data URL as our "uploaded" image
        const reader = new FileReader();
        reader.onloadend = () => {
          // In a real app, use the URL returned from your server
          const uploadedUrl = reader.result as string;
          onImageSelected(uploadedUrl);
          toast({ 
            title: "Image uploaded", 
            description: "The image has been uploaded successfully." 
          });
          setIsUploading(false);
        };
        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error uploading image:", error);
        toast({ 
          title: "Upload error",
          description: "There was a problem uploading your image.",
          variant: "destructive"
        });
        setIsUploading(false);
      }
    }
  };

  const handleUseUrl = () => {
    if (imageUrlInput) {
      onImageSelected(imageUrlInput);
      toast({ title: "Image URL set" });
    } else {
      toast({ 
        title: "No URL provided", 
        description: "Please enter a valid image URL.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="upload">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upload">Upload Image</TabsTrigger>
          <TabsTrigger value="url">Use URL</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <Input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="cursor-pointer"
          />
          
          <div className="flex justify-end">
            <Button 
              onClick={handleUpload} 
              disabled={!selectedFile || isUploading}
            >
              {isUploading ? "Uploading..." : "Upload Image"}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="url" className="space-y-4">
          <Input 
            type="url" 
            placeholder="Enter image URL" 
            value={imageUrlInput}
            onChange={handleUrlChange}
          />
          
          <div className="flex justify-end">
            <Button onClick={handleUseUrl} disabled={!imageUrlInput}>
              Use URL
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      {previewUrl && (
        <div className="mt-4 border rounded-md overflow-hidden">
          <p className="text-xs text-muted-foreground px-2 pt-2">Image Preview:</p>
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="mx-auto max-h-48 object-contain p-2" 
          />
        </div>
      )}
    </div>
  );
}
