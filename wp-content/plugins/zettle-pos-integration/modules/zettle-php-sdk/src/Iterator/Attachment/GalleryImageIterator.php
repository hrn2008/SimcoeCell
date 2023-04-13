<?php

declare(strict_types=1);

namespace Inpsyde\Zettle\PhpSdk\Iterator\Attachment;

use Inpsyde\Zettle\PhpSdk\Iterator\WcProductIterator;
use WC_Product;

/**
 * Returns the IDs of all product gallery images
 */
class GalleryImageIterator implements WcProductIterator
{

    /**
     * @var WC_Product
     */
    private $product;

    /**
     * @var int[]
     */
    private $galleryIds;

    public function __construct(WC_Product $product)
    {
        $this->product = $product;
    }

    #[\ReturnTypeWillChange]
    public function current()
    {
        return current($this->galleryIds);
    }

    public function next(): void
    {
        next($this->galleryIds);
    }

    #[\ReturnTypeWillChange]
    public function key()
    {
        return key($this->galleryIds);
    }

    public function valid(): bool
    {
        return current($this->galleryIds) !== false;
    }

    public function rewind(): void
    {
        $this->galleryIds = $this->product->get_gallery_image_ids();
    }

    /**
     * {@inheritDoc}
     */
    public function switchProduct(WC_Product $product): void
    {
        $this->product = $product;
        $this->rewind();
    }
}
