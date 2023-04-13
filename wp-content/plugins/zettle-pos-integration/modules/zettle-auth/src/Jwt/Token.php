<?php

declare(strict_types=1);

namespace Inpsyde\Zettle\Auth\Jwt;

class Token implements TokenInterface
{
    /** @var array<string, mixed> */
    protected $headers;

    /** @var array<string, mixed> */
    protected $claims;

    /**
     * @param array<string, mixed> $headers
     * @param array<string, mixed> $claims
     * @param string $signature
     */
    public function __construct(array $headers, array $claims, string $signature)
    {
        $this->headers = $headers;
        $this->claims = $claims;
    }

    public function getHeaders(): array
    {
        return $this->headers;
    }

    public function getClaims(): array
    {
        return $this->claims;
    }
}
